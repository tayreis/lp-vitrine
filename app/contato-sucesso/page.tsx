import Link from "next/link";

export default function ContatoSucesso() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-white text-center">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-[#0a1f3c] mb-4">Mensagem enviada com sucesso!</h1>
        <p className="text-[#0a1f3c]/80 mb-6">
          Agradecemos seu contato. Em breve retornaremos com as informações solicitadas.
        </p>
        <Link href="/" passHref legacyBehavior>
          <a className="inline-block px-6 py-3 rounded-lg bg-[#d4af37] text-white font-semibold shadow-md transition hover:brightness-110">
            Voltar ao início
          </a>
        </Link>
      </div>
    </div>
  );
}
