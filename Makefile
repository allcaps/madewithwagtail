.PHONY: help clean-pyc lint-py lint-js
.DEFAULT_GOAL := help

PYTHON_FILES ?= .
JS_FILES ?= ./core/frontend/js

help: ## See what commands are available.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36mmake %-15s\033[0m # %s\n", $$1, $$2}'

clean-pyc: ## Remove Python file artifacts.
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +

lint-py: ## Run Python linters
	flake8 $(PYTHON_FILES)
	isort --check-only --diff --recursive $(PYTHON_FILES)

lint-js: ## Run JavaScript linters
	npm run linter:js -- $(JS_FILES)
