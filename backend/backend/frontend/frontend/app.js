const api = "http://localhost:3000";

async function gerar() {
  const cnpj = document.getElementById("cnpj").value;
  const mes = document.getElementById("mes").value;
  const ano = document.getElementById("ano").value;

  await fetch(api + "/salvar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ cnpj, mes, ano })
  });

  alert("Salvo!");
  carregar();
}

function copiar() {
  const cnpj = document.getElementById("cnpj").value;
  navigator.clipboard.writeText(cnpj);
  alert("Copiado!");
}

function abrir() {
  window.open(
    "https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao",
    "_blank"
  );
}

async function carregar() {
  const res = await fetch(api + "/historico");
  const data = await res.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.cnpj} - ${item.mes}/${item.ano}`;
    lista.appendChild(li);
  });
}

carregar();
