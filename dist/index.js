"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreate = void 0;
const pulumi = require("@pulumi/pulumi");
const azuread = require("@pulumi/azuread");
class GroupCreate extends pulumi.ComponentResource {
    constructor(name, args, opts) {
        super("custom:azuread:GroupCreate", name, {}, opts);
        this.group = new azuread.Group(name, {
            displayName: args.name,
            owners: args.owners || [],
            members: args.members || [],
            securityEnabled: true
        }, {
            parent: this
        });
        this.registerOutputs({
            groupID: this.group.id,
        });
    }
}
exports.GroupCreate = GroupCreate;
