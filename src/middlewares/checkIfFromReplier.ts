import { Context } from 'telegraf'

export function checkIfFromReplier(ctx: Context, next: () => any) {
	if (
		ctx &&
		ctx.message &&
		ctx.message.reply_to_message
	) return next()
}
