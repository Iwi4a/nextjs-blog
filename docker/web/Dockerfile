# Base on offical Node.js Alpine image
FROM node:alpine

# Installs packages needed for nextjs
RUN apk --no-cache add shadow \                                                                   
    gcc \                                                                                         
    musl-dev \                                                                                    
    autoconf \                                                                                    
    automake \                                                                                    
    make \                                                                                        
    libtool \                                                                                     
    nasm \                                                                                        
    tiff \                                                                                        
    jpeg \                                                                                        
    zlib \                                                                                        
    zlib-dev \                                                                                    
    file \                                                                                        
    pkgconf \
    curl

# Set working directory
WORKDIR /web

ARG WP_URL
ARG WP_PORT

ENV WP_URL=$WP_URL
ENV WP_PORT=$WP_PORT

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./web/package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY ./web ./

# Copy wait-for-it to delay its start
COPY ./docker/wait-for-it.sh ./script/wait-for-it.sh
RUN chmod +x ./script/wait-for-it.sh

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Wait for Wordpress to load and Run npm build + start script with PM2 when container starts
# CMD tail -f /dev/null # Use in case of debugging
CMD bash -c "./script/wait-for-it.sh --timeout=1000 ${WP_URL}:${WP_PORT} && npm run build && pm2-runtime npm -- start"