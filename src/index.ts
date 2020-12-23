import 'module-alias/register'
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })
import '@models'
import { bot } from '@helpers/bot'
import { setupAdmin } from '@commands/admin'
import { report } from '@helpers/report'

// Commands
setupAdmin(bot)

bot.catch(report)
bot.launch()
