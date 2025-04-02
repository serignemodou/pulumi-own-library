import * as pulumi from "@pulumi/pulumi";
import * as azuread from "@pulumi/azuread";
export interface GroupsArgs {
    name: string;
    owners?: string[];
    members?: string[];
}
export declare class GroupCreate extends pulumi.ComponentResource {
    readonly group: azuread.Group;
    constructor(name: string, args: GroupsArgs, opts?: pulumi.ComponentResourceOptions);
}
