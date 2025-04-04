import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import Login from '@/app/components/login'
import { Database } from '@/lib/database.types'

// ログインページ
const LoginPage = async () => {
    const supabase = createServerComponentClient<Database>({ 
        cookies
    })

    // セッションの取得
    const {
        data: { session },
    } = await supabase.auth.getSession()

    // ログイン済みの場合はリダイレクト
    if (session) {
        redirect('/')
    }

    return (
        <Login />
    )
}

export default LoginPage