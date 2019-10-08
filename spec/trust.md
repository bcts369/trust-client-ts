# Trust REST API Spec

`cosmos-client-ts`に依存。

```Shell
$ npm i --save cosmos-client-ts
```

## GetScores

`GET` `/trust/scores/{address}`

### Request

```TypeScript
{
  topic_ids: string[];
}
```

`topic-ids`: `,`で区切った`topic-id`。`^[a-z]([a-z]|-)*$`

### Response

```TypeScript
{ [topicID: string]: number; }
```

Goで言うところの`map[string]float64`。

## Evaluate

`POST` `trust/evaluate`

### Request

```TypeScript
interface EvaluateReq {
  base_req: BaseReq; // cosmos-client-ts
  topic_id: string;
  from_address: string;
  to_address: string;
  weight1000: number;
}
```

### Response

`StdTx`@`cosmos-client-ts`

## DistributeByScore

### Request

`POST` `/trust/distribute-by-score`

```TypeScript
interface DistributeByScoreReq {
  base_req: BaseReq; // cosmos-client-ts
  topic_id: string;
  from_address: string;
  amount: number;
}
```

### Response

`StdTx`@`cosmos-client-ts`

## DistributeByEvaluation

### Request

`POST` `/trust/distribute-by-evaluation`

```TypeScript
interface DistributeByEvaluationReq {
  base_req: BaseReq; // cosmos-client-ts
  topic_id: string;
  address: string;
  from_address: string;
  amount: number;
}
```

### Response

`StdTx`@`cosmos-client-ts`
