### Flask静态资源缓存更新

需要在配置中添加`app.config['SEND_FILE_MAX_AGE_DEFAULT'] = timedelta(seconds=1)`  
配置选项，其作用是每一秒刷新一次缓存

### PS：为了使其生效，要先手动清理一次浏览器缓存