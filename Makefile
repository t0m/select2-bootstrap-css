pages:
	cd gh-pages; git fetch origin
	cd gh-pages; git checkout gh-pages
	cd gh-pages; git merge origin/gh-pages
	rm -rf gh-pages/demo/*
	cp -r docs/* gh-pages/demo
	cd gh-pages; git add -u .
	cd gh-pages; git add .
	cd gh-pages; git commit -m "Updated gh-pages."
	cd gh-pages; git push origin gh-pages

pages_setup:
	mkdir gh-pages
	git init gh-pages
	cd gh-pages; git remote add origin git@github.com:t0m/select2-bootstrap-css.git
