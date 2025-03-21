/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_FIREBASE_MEASUREMENT_ID: any;
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_FIREBASE_STORAGE_BUCKET: string;
    readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;
    readonly measurementId: string;
    readonly VITE_OPENAI_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
