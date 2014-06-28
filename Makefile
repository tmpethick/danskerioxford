.PHONY: stylus
stylus:
	- stylus -I _stylus -I node_modules/nib/lib -c < _stylus/styles.styl > css/styles.css
