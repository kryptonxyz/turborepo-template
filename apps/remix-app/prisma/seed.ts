import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  const email = 'elliot@mr.robot'

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  })

  const hashedPassword = await bcrypt.hash('d@rl3n3123', 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  })

  await prisma.note.create({
    data: {
      title: 'A simple program',
      body: 'A simple program, a worm that can make date unreadable, malware that took Darlene maybe two hours to code. Is that really all it makes to kill the world? shouldn’t I be enjoying this?',
      userId: user.id,
    },
  })

  await prisma.note.create({
    data: {
      title: 'Random thought',
      body: 'I should just tell her what she wants to hear.',
      userId: user.id,
    },
  })

  console.log(`Database has been seeded. 🌱`)
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
