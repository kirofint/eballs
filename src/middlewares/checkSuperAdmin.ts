import { Context } from 'telegraf'

export function checkSuperAdmin(ctx: Context, next: () => any) {
	if (
			// ctx.isAdministrator ||
			ctx.from.id === parseInt(process.env.ADMIN, 10)
	) return next()
}
