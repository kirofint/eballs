import { bot } from '@helpers/bot'
import { Extra } from 'telegraf'

export function callbackBtn(caption: string, callback: string): any {
	return Extra.markup(Markup =>
		Markup.inlineKeyboard([
			Markup.callbackButton(
				caption, callback
			)
		])
	)
}

export function removeBtn(caption ?: string) {
	bot.action('selfRemove', async ctx =>
		await ctx.deleteMessage()
	)

	return Extra.markup(Markup =>
		Markup.inlineKeyboard([
			Markup.callbackButton(
				caption || '❌', 'selfRemove'
			)
		])
	)
}

