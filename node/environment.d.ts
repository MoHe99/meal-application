declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_URI: string;
      DB_DIALECT: "postgres" | "mysql";
      PORT: number;
    }
  }
}

export {}
