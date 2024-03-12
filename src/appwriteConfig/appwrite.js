import { Client, Databases, Storage } from "appwrite";
const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65efc9f72d0f7ee9ff5c");

const databases = new Databases(client);
export const storage = new Storage(client);
