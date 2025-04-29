import { initializeApp, cert, getApps, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let serviceAccount = {} as ServiceAccount;
const arquivoFirebase = process.env.ARQUIVO_FIREBASE || '';

if (!getApps().length) {
  const importedAccount = await import(`../../${arquivoFirebase}`);
  serviceAccount = importedAccount.default as ServiceAccount;

  initializeApp({
    credential: cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
  });
}

export const db = getFirestore();
