import { get } from '$lib/api';

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
  const res = await (await get(`testing${params}`, 'sometoken')).json()
  const {data} = res
  console.log(params.slug)
  return {
    path: params.slug,
    response: data
  }
}
