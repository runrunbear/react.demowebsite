import React from 'react';
import { observer } from 'mobx-react';

const SiteList = observer(({ store }) => {
	return (
		<div>
			<h1>Site List</h1>
			<ul>
				{/*
				{store.sites.map(
					site => <li key={site.siteId} onClick={() => store.showDocument(site.siteId)}>{site.siteName}</li>
				)}*/}
			</ul>
		</div>
	)
})
export default SiteList