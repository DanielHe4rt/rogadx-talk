---
layout: center
transition: fade
align: center
--- 

# E então, qual vai ser o projeto?

Chega de enrolação e bora pra brincadeira >:)

---
transition: fade-out
layout: whoami
image: "https://i.imgur.com/WSs78Yb.png"
---

# Twitch Better Profile

Eu sempre tento resolver meus problemas em projetos pessoais, e dessa vez não foi diferente.

No chat da Twitch, você tem poucas informações sobre uma pessoa. Inicialmente você consegue saber:

- Qual Nickname
- Membro da Moderação
- Se é Inscrito

<v-click>

Só que algo que falta pra mim é saber como chamar a pessoa. Até porquê a cada follow eu falo caso não consiga identificar o genero via nickname:

</v-click>

<v-click>

> Muito obrigado pelo follow e seja bem vindo primo ou prima! - Reis, Daniel 

</v-click>

<v-click>

E mano, é muita gente passando pela live todos os dias. Preciso de um jeito fácil de anotar informações relevantes.

</v-click>

---
transition: fade-out
layout: whoami
image: "https://i.imgur.com/WSs78Yb.png"
---

# Twitch Better Profile

Nisso, nasceu mais uma tentativa de fazer um projeto na Twitch!

Minha task era criar um exemplo bom pra chave-valor (kv) e existe exemplo melhor que uma query simples pra buscar o perfil de alguém? 

<v-click>

Se liga:

```cql
// Scylla CQL
SELECT 
    user_id, username, pronoun
FROM 
    settings_by_user 
WHERE 
    username = 'moovmooov' AND
    channel_id = 'danielhe4rt';
```
</v-click>

<v-click>

<div class="mt-5">


> No ScyllaDB, por ser um banco **NoSQL** você desenvolve pensando em qual **query** você quer rodar.

</div>

</v-click>


