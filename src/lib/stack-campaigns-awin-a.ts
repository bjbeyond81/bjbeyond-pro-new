import type { StackCampaign } from "@/lib/stack-types";
import { campaign_esr } from "@/lib/stack-campaign-esr";
import { campaign_imou } from "@/lib/stack-campaign-imou";
import { campaign_toputure } from "@/lib/stack-campaign-toputure";

export const awinStackCampaignsA: StackCampaign[] = [
  campaign_esr,
  campaign_imou,
  campaign_toputure,
];
