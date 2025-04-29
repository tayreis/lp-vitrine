import { NextResponse } from 'next/server';
import { db } from '@/app/lib/firebaseAdmin';
import { Timestamp } from 'firebase-admin/firestore';

export async function POST(request: Request) {
  const body = await request.json();
  const { nome, email, telefone, mensagem } = body;

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ sucesso: false, message: 'Campos obrigatórios ausentes' }, { status: 400 });
  }

  try {
    await db.collection('contatos').add({
      nome,
      email,
      telefone,
      mensagem,
      criadoEm: Timestamp.now(),
    });

    return NextResponse.json({ sucesso: true, message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar no Firestore:', error);
    return NextResponse.json({ sucesso: false, message: 'Erro interno do servidor.' }, { status: 500 });
  }
}
