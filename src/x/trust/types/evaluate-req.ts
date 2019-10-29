import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";

export interface EvaluateReq {
    base_req: BaseReq; // cosmos-client-ts
    topic_id: string;
    from_address: string;
    to_address: string;
    weight1000: number;
}