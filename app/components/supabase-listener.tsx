'use server'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Navigation from './navigation'
import { Database } from '@/lib/database.types'

// 認証状態の監視
const Supabaselistener = async () => {
    const supabase = createServerComponentClient<Database>({ cookies })

    // セッションの取得
    const {
        data: { session },
    } = await supabase.auth.getSession()

    return (
        <Navigation session={session} />
    )
}

export default Supabaselistener