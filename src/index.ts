import * as pulumi from "@pulumi/pulumi";
import * as azuread from "@pulumi/azuread";

export interface GroupsArgs {
    name: string;
    owners?: string[];
    members?: string[];
}

export class GroupCreate extends pulumi.ComponentResource {
    public readonly group: azuread.Group;

    constructor(name: string, args: GroupsArgs, opts?: pulumi.ComponentResourceOptions) {
        super("custom:azuread:GroupCreate", name, {}, opts);
        this.group = new azuread.Group(name, {
            displayName: args.name,
            owners: args.owners || [],
            members: args.members || [],
            securityEnabled: true
        },{
            parent: this
        });
        this.registerOutputs({
            groupID: this.group.id,
        });
    }
}