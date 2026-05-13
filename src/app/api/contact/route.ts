import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// rota serverless que recebe os dados do formulário e salva no supabase
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // validação básica no servidor
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // insere a mensagem na tabela do supabase
    const { error } = await supabase.from("mensagens_contato").insert([
      {
        nome: name,
        email,
        mensagem: message,
      },
    ]);

    if (error) {
      console.error("Erro ao salvar no Supabase:", error);
      return NextResponse.json(
        { error: "Erro ao salvar a mensagem." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Mensagem salva com sucesso!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
