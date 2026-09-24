import type { StackCampaign } from "@/lib/stack-types";
import { ultrahumanCampaignFields } from "@/lib/ultrahuman-campaign";
import { awinStackCampaignsA } from "@/lib/stack-campaigns-awin-a";
import { awinStackCampaignsB } from "@/lib/stack-campaigns-awin-b";

export const stackCampaigns: StackCampaign[] = [
  ...awinStackCampaignsA,
  ...awinStackCampaignsB,
  { ...ultrahumanCampaignFields },
];
