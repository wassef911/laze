import { Command, Flags } from '@oclif/core'
import { Laze } from '../class/Laze'

export default class Run extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  public async run(): Promise<void> {
    const o = new Laze('/home/wassef911/Desktop/CODE/elBaladiya/laze/laze/example/laze/main.yml', false)
  }
}
