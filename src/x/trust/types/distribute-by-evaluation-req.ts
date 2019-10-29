import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";

export interface DistributeByEvaluationReq {
    base_req: BaseReq; // cosmos-client-ts
    topic_id: string;
    address: string;
    from_address: string;
    amount: number;
}