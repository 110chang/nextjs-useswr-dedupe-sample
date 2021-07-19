import Link from 'next/link'

export default function AppHeader() {
  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  )
}
