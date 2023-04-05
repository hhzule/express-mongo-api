
import { omit } from "lodash";
import DealerModel, { DealerDocument, DealerInput } from "../models/dealer.model";

export async function createDealer(input: DealerInput) {
    try {
        const user = await DealerModel.create(input);
        return user
    } catch (e: any) {
        throw new Error(e);
    }
}
