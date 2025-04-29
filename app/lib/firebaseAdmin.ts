import { initializeApp, cert, getApps, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '@/dayane-cunha-advocacia-firebase-adminsdk-fbsvc-4b45b37ebe.json'; // importação DIRETA do JSON já gerado

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
    databaseURL: process.env.DATABASE_URL,
  });
}

export const db = getFirestore();
