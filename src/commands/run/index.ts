import { Command, Flags } from '@oclif/core'

export class Laze extends Command {
  static flags = {
    // can pass either --force or -f
    force: Flags.boolean({ char: 'f' }),
    file: Flags.string(),
  }

  async run() {
    const { flags } = await this.parse(Laze)
    if (flags.force) console.log('--force is set')
    if (flags.file) console.log(`--file is: ${flags.file}`)
  }
}
