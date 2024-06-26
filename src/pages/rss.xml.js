import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { TITLE, SITE_DESCRIPTION } from '@/consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
