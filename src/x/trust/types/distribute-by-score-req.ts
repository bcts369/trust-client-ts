import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";

export interface DistributeByScoreReq {
    base_req: BaseReq; // cosmos-client-ts
    topic_id: string;
    from_address: string;
    amount: number;
}