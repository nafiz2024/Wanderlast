import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

let client;

const getMongoClient = () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI);
  }

  return client;
};

const getDatabase = () => getMongoClient().db("wanderlust");

export const auth = betterAuth({
  database: mongodbAdapter(getDatabase(), {
    client: getMongoClient(),
  }),
  emailAndPassword: {
    enabled: true,
  },
  account: {
    accountLinking: {
      trustedProviders: ["google"],
      requireLocalEmailVerified: false,
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      overrideUserInfoOnSignIn: true,
    },
  },
});
