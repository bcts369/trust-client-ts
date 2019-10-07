# Trust REST API Spec

※途中。

`cosmos-client-ts`に依存。

```Shell
$ npm i --save cosmos-client-ts
```

## GetScores
`GET` `/{address}/scores?topic-ids={topic-ids}`

### Request

`topic-ids`: `,`で区切った`topic-id`。`^[a-z]([a-z]|-)*$`

### Response

```TypeScript
{ [topicID: string]: number; }
```

Goで言うところの`map[string]float64`。
