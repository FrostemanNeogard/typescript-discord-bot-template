import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";
import "dotenv/config";

@Discord()
export class Info {
  @Slash({
    description: "Replies with 'Pong!'",
  })
  help(interaction: CommandInteraction) {
    interaction.reply("Pong!");
  }
}
