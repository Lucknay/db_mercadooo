const express = require("express");
const cors = require("cors");
const pool = require("./db.js");
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/produtos", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM produtos"); // Correção aqui
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao conectar no banco", error: error.message });
  }
});

app.post("/produtos", async (req, res) => {
  const { nome, preco, qtde_estoque} = req.body;

  try {
    const consulta =
      "INSERT INTO produtos (nome, preco, qtde_estoque) VALUES ($1, $2, $3)"; // Correção aqui

    await pool.query(consulta, [nome, preco, qtde_estoque]);

    res.status(201).json({ message: "Produto cadastrado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao cadastrar produto", error: error.message });
  }
});

app.put("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, preco, qtde_estoque } = req.body;

  try {
    const consulta =
      "UPDATE produtos SET nome = $1, preco = $2, qtde_estoque = $3 WHERE id = $4"; // Correção aqui

    await pool.query(consulta, [nome, preco, qtde_estoque, id]);
    res.status(200).json({ message: "Produto atualizado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao atualizar produto", error: error.message });
  }
});

app.delete("/produtos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const consulta = "DELETE FROM produtos WHERE id = $1"; // Correção aqui

    await pool.query(consulta, [id]);
    res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao deletar produto", error: error.message });
  }
});

app.get("/produtos", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM produtos"); // Correção aqui
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao conectar no banco", error: error.message });
  }
});

app.get("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, preco, qtde_estoque } = req.body;

  try {
    const consulta =
      "SELECT * FROM produtos SET nome = $1, preco = $2, qtde_estoque = $3 WHERE id = $4"; // Correção aqui

    await pool.query(consulta, [nome, preco, qtde_estoque, id]);
    res.status(200).json({ message: "Produto visualizado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao visualizar produto", error: error.message });
  }
});

app.post("/produtos", async (req, res) => {
  const { nome, preco, qtde_estoque} = req.body;

  try {
    const consulta =
      "INSERT INTO produtos (nome, preco, qtde_estoque) VALUES ($1, $2, $3)"; // Correção aqui

    await pool.query(consulta, [nome, preco, qtde_estoque]);

    res.status(201).json({ message: "Produto cadastrado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao cadastrar produto", error: error.message });
  }
});

app.put("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, preco, qtde_estoque } = req.body;

  try {
    const consulta =
      "UPDATE produtos SET nome = $1, preco = $2, qtde_estoque = $3 WHERE id = $4"; // Correção aqui

    await pool.query(consulta, [nome, preco, qtde_estoque, id]);
    res.status(200).json({ message: "Produto atualizado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao atualizar produto", error: error.message });
  }
});

app.delete("/produtos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const consulta = "DELETE FROM produtos WHERE id = $1"; // Correção aqui

    await pool.query(consulta, [id]);
    res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao deletar produto", error: error.message });
  }
});

// em cima está o crude de produtos

app.get("/clientes", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM clientes"); // Correção aqui
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao conectar no banco", error: error.message });
  }
});

app.get("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, cpf, telefone } = req.body;

  try {
    const consulta =
      "SELECT * FROM clientes SET nome = $1, cpf = $2, telefone= $3 WHERE id = $4"; // Correção aqui

    await pool.query(consulta, [nome, cpf, telefone, id]);
    res.status(200).json({ message: "cliente visualizado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao visualizar cliente", error: error.message });
  }
});

app.post("/clientes1", async (req, res) => {
  const { nome, cpf, telefone } = req.body;

  try {
    const consulta =
      "INSERT INTO clientes ( nome, cpf, telefone) VALUES ($1, $2, $3)"; // Correção aqui

    await pool.query(consulta, [nome, cpf, telefone]);

    res.status(201).json({ message: "Cliente cadastrado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao cadastrar cliente", error: error.message });
  }
});

app.put("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, cpf, telefone } = req.body;

  try {
    const consulta =
      "UPDATE clientes SET nome = $1, cpf = $2, telefone = $3 WHERE id = $4"; // Correção aqui

    await pool.query(consulta, [nome, cpf, telefone, id]);
    res.status(200).json({ message: "cliente atualizado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao atualizar cliente", error: error.message });
  }
});

app.delete("/clientes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const consulta = "DELETE FROM clientes WHERE id = $1"; // Correção aqui

    await pool.query(consulta, [id]);
    res.status(200).json({ message: "cliente deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao deletar cliente", error: error.message });
  }
});

app.post("/vendas", async (req, res) => {
  const { id_cliente, id_produto } = req.body;

  try {
    const consulta =
      "INSERT INTO vendas (id_cliente, id_produto) VALUES ($1, $2)"; // Correção aqui

    await pool.query(consulta, [id_cliente, id_produto]);

    res.status(201).json({ message: "venda cadastrado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao cadastrar venda", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log("API está no AR");
});
