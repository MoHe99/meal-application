include .env

# Only for internal uses (do not use)
docker-build:
	@echo "Building containers..."
	@docker-compose build --no-cache

docker-start:
	@echo "Starting containers..."
	@docker-compose up -d

docker-prune:
	@echo "Destroying containers, images and volumes..."
	@docker-compose down --remove-orphans -v --rmi all

# Control App
app-stop:
	@echo "Stopping containers..."
	@docker-compose stop

app-start:
	@make docker-start

app-restart:
	@echo "Restarting containers..."
	@docker-compose restart

app-rebuild:
	@make docker-prune
	@make docker-build
	@make docker-start

app-destroy:
	@make docker-prune

# Docker Logs and Shells
ps:
	@docker-compose ps

logs:
	@docker-compose logs -f

logs-%:
	@docker-compose logs -f $*

bash-%:
	@docker-compose exec $* bash

# Database
export-postgres:
	@echo "Exporting postgres ${DB_NAME}..."
	@docker-compose exec -T database pg_dump -h database -p ${DB_TARGET_PORT} -U ${DB_USER} -F p -f /scripts/application.sql ${DB_NAME}
	@echo "Postgres export complete."

# Codestyle
format:
	@cd api && pnpm format && cd .. && cd frontend && pnpm format

lint:
	@cd api && pnpm lint && cd .. && cd frontend && pnpm lint
