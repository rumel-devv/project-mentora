export const courseData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/courses`)
    const data = await res.json()
    return data
}
export const featuredData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/featured`)
    const data = await res.json()
    return data
}

export const DeteailsPageData  = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/courses/${id}`)
    const data = await res.json()
    return data
}