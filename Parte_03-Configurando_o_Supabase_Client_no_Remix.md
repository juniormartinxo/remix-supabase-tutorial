### Criando o arquivo `.env`
##### Passo 01
1) Vá ao Dashboard do Supabase ([https://app.supabase.io/](https://app.supabase.io/)) e entre no seu projeto `Remix Blog Supabase`
2) Na barra lateral, clique no menu `Settings` (⚙️), depois em `API` e deixe a janela aberta 
3) Vá até a raiz do seu projeto.

##### Passo 02
Na raiz do projeto crie o arquivo `.env` com as seguintes variáveis:
- SUPABASE_URL; e
- SUPABASE_KEY.

##### Passo 03 - setando a variável `SUPABASE_KEY`
1) Na janela do Dashboard do Supabase, aquela que deixamos aberta, observe que dentro do formulário `Project API Keys` existe o campo `anon` `public`, clique no botão `copy` para capturar o valor dele
2) Clicado no botão `copy`, cole o valor copiado para a variável `SUPABASE_KEY` no seu arquivo `.env`.

##### Passo 04 - setando a variável `SUPABASE_URL`
Ainda no Dashboard do Supabase existe o fomrulário `Configuration`, agora precisamos copiar o valor do campo `URL`, da mesma forma clique no botão `copy` e cole o valor copiado para a variável `SUPABASE_URL` no seu arquivo `.env`.

Se tudo foi feito corretamente seu arquivo `.env` deverá ficar parecido com algo assim:

```env
SUPABASE_URL='https://asxwozcalashinicovpv.supabase.co'
SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJpc3MiOiAic3VwYWJhc2UiLAogICJyZWYiOiAiYXN4d296Y2FsYXNoaW5pY292cHYiLAogICJyb2xlIjogImFub24iLAogICJpYXQiOiAxNjQ3NzAyMTkxLAogICJleHAiOiAxOTYzMjc4MTkxCn0=.MTPNt7yEGWOvkORubeHDlvEGfH8ZAZcuHq5T878Foec'
```
**Os dados acima são fictícios, portanto não irão funcionar no seu projeto, substitua os dados com os seus! ;)*

### Criando o cliente do Supabase
Dentro da pasta `app`, crie uma subpasta como o nome `utils` e dentro dela crie o arquivo `supabase-client.server.ts`, que ficará assim:

```ts
//supabase-client.server.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env?.SUPABASE_URL as string
const supabaseKey = process.env?.SUPABASE_KEY as string

export const supabase = createClient(supabaseUrl, supabaseKey)
```

Pronto, nossa conexão com o banco de dados já está pronta, na parte 04 iremos iniciar nosso CRUD propriamente dito.
