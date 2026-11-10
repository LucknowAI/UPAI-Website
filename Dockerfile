# Base on official Node.js Alpine image
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# so Docker can cache the dependency install
COPY package*.json ./

# Install exact dependencies from the lockfile
RUN npm ci

# Copy all files
COPY . .

# Build app
RUN npm run build

# Production image, copy all the files and run next
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Create a non-root user and set proper permissions
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app

# Copy built app
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Switch to non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 8080

# Environment variables
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# Start the app
CMD ["node", "server.js"]
