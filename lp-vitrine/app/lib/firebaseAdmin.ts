import { initializeApp, cert, getApps, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let serviceAccount = {} as ServiceAccount;

if (!getApps().length) {
  const importedAccount = await import('@/arquivo-firebase.json');
  serviceAccount = importedAccount.default as ServiceAccount;

  initializeApp({
    credential: cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
  });
}

export const db = getFirestore();
