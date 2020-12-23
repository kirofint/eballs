import { Telegraf, Context } from 'telegraf'
import { checkSuperAdmin } from '@middlewares/checkSuperAdmin'
import { checkIfFromReplier } from '@middlewares/checkIfFromReplier'
import { sendReport } from '@helpers/report'

export function setupAdmin(bot: Telegraf<Context>) {
  bot.command('source', checkSuperAdmin, checkIfFromReplier, async ctx => {
    await sendReport(
			`<code>${JSON.stringify(
				ctx.message.reply_to_message,
				undefined,
				2
			)}</code>`
		)
    
    await ctx.deleteMessage()
  })
}
