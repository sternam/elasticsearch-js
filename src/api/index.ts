'use strict'

/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { EventEmitter } from 'events'
import { ApiResponse } from '../Transport'
/* eslint-enable no-unused-vars */

type anyObject = { [key: string]: any }
type callbackFn = (err: Error | null, result: ApiResponse) => void
type apiMethod = (params?: anyObject | callbackFn, callback?: callbackFn) => any
declare function require(moduleName: string): any

interface ESAPIOptions {
  getMakeRequest: Function
  ConfigurationError: any
  result: any
}

export default class ESAPI extends EventEmitter {
  bulk: apiMethod
  cat: {
    aliases: apiMethod
    allocation: apiMethod
    count: apiMethod
    fielddata: apiMethod
    health: apiMethod
    help: apiMethod
    indices: apiMethod
    master: apiMethod
    nodeattrs: apiMethod
    nodes: apiMethod
    pending_tasks: apiMethod
    pendingTasks: apiMethod
    plugins: apiMethod
    recovery: apiMethod
    repositories: apiMethod
    segments: apiMethod
    shards: apiMethod
    snapshots: apiMethod
    tasks: apiMethod
    templates: apiMethod
    thread_pool: apiMethod
    threadPool: apiMethod
}
  ccr: {
    delete_auto_follow_pattern: apiMethod
    deleteAutoFollowPattern: apiMethod
    follow: apiMethod
    follow_stats: apiMethod
    followStats: apiMethod
    get_auto_follow_pattern: apiMethod
    getAutoFollowPattern: apiMethod
    pause_follow: apiMethod
    pauseFollow: apiMethod
    put_auto_follow_pattern: apiMethod
    putAutoFollowPattern: apiMethod
    resume_follow: apiMethod
    resumeFollow: apiMethod
    stats: apiMethod
    unfollow: apiMethod
}
  clear_scroll: apiMethod
  clearScroll: apiMethod
  cluster: {
    allocation_explain: apiMethod
    allocationExplain: apiMethod
    get_settings: apiMethod
    getSettings: apiMethod
    health: apiMethod
    pending_tasks: apiMethod
    pendingTasks: apiMethod
    put_settings: apiMethod
    putSettings: apiMethod
    remote_info: apiMethod
    remoteInfo: apiMethod
    reroute: apiMethod
    state: apiMethod
    stats: apiMethod
}
  count: apiMethod
  create: apiMethod
  delete: apiMethod
  delete_by_query: apiMethod
  deleteByQuery: apiMethod
  delete_by_query_rethrottle: apiMethod
  deleteByQueryRethrottle: apiMethod
  delete_script: apiMethod
  deleteScript: apiMethod
  exists: apiMethod
  exists_source: apiMethod
  existsSource: apiMethod
  explain: apiMethod
  field_caps: apiMethod
  fieldCaps: apiMethod
  get: apiMethod
  get_script: apiMethod
  getScript: apiMethod
  get_source: apiMethod
  getSource: apiMethod
  index: apiMethod
  indices: {
    analyze: apiMethod
    clear_cache: apiMethod
    clearCache: apiMethod
    close: apiMethod
    create: apiMethod
    delete: apiMethod
    delete_alias: apiMethod
    deleteAlias: apiMethod
    delete_template: apiMethod
    deleteTemplate: apiMethod
    exists: apiMethod
    exists_alias: apiMethod
    existsAlias: apiMethod
    exists_template: apiMethod
    existsTemplate: apiMethod
    exists_type: apiMethod
    existsType: apiMethod
    flush: apiMethod
    flush_synced: apiMethod
    flushSynced: apiMethod
    forcemerge: apiMethod
    get: apiMethod
    get_alias: apiMethod
    getAlias: apiMethod
    get_field_mapping: apiMethod
    getFieldMapping: apiMethod
    get_mapping: apiMethod
    getMapping: apiMethod
    get_settings: apiMethod
    getSettings: apiMethod
    get_template: apiMethod
    getTemplate: apiMethod
    get_upgrade: apiMethod
    getUpgrade: apiMethod
    open: apiMethod
    put_alias: apiMethod
    putAlias: apiMethod
    put_mapping: apiMethod
    putMapping: apiMethod
    put_settings: apiMethod
    putSettings: apiMethod
    put_template: apiMethod
    putTemplate: apiMethod
    recovery: apiMethod
    refresh: apiMethod
    rollover: apiMethod
    segments: apiMethod
    shard_stores: apiMethod
    shardStores: apiMethod
    shrink: apiMethod
    split: apiMethod
    stats: apiMethod
    update_aliases: apiMethod
    updateAliases: apiMethod
    upgrade: apiMethod
    validate_query: apiMethod
    validateQuery: apiMethod
}
  info: apiMethod
  ingest: {
    delete_pipeline: apiMethod
    deletePipeline: apiMethod
    get_pipeline: apiMethod
    getPipeline: apiMethod
    processor_grok: apiMethod
    processorGrok: apiMethod
    put_pipeline: apiMethod
    putPipeline: apiMethod
    simulate: apiMethod
}
  mget: apiMethod
  msearch: apiMethod
  msearch_template: apiMethod
  msearchTemplate: apiMethod
  mtermvectors: apiMethod
  nodes: {
    hot_threads: apiMethod
    hotThreads: apiMethod
    info: apiMethod
    reload_secure_settings: apiMethod
    reloadSecureSettings: apiMethod
    stats: apiMethod
    usage: apiMethod
}
  ping: apiMethod
  put_script: apiMethod
  putScript: apiMethod
  rank_eval: apiMethod
  rankEval: apiMethod
  reindex: apiMethod
  reindex_rethrottle: apiMethod
  reindexRethrottle: apiMethod
  render_search_template: apiMethod
  renderSearchTemplate: apiMethod
  scripts_painless_execute: apiMethod
  scriptsPainlessExecute: apiMethod
  scroll: apiMethod
  search: apiMethod
  search_shards: apiMethod
  searchShards: apiMethod
  search_template: apiMethod
  searchTemplate: apiMethod
  snapshot: {
    create: apiMethod
    create_repository: apiMethod
    createRepository: apiMethod
    delete: apiMethod
    delete_repository: apiMethod
    deleteRepository: apiMethod
    get: apiMethod
    get_repository: apiMethod
    getRepository: apiMethod
    restore: apiMethod
    status: apiMethod
    verify_repository: apiMethod
    verifyRepository: apiMethod
}
  tasks: {
    cancel: apiMethod
    get: apiMethod
    list: apiMethod
}
  termvectors: apiMethod
  update: apiMethod
  update_by_query: apiMethod
  updateByQuery: apiMethod
  update_by_query_rethrottle: apiMethod
  updateByQueryRethrottle: apiMethod
  xpack: {
    graph: {
          explore: apiMethod
    }
    info: apiMethod
    license: {
          delete: apiMethod
          get: apiMethod
          get_basic_status: apiMethod
          getBasicStatus: apiMethod
          get_trial_status: apiMethod
          getTrialStatus: apiMethod
          post: apiMethod
          post_start_basic: apiMethod
          postStartBasic: apiMethod
          post_start_trial: apiMethod
          postStartTrial: apiMethod
    }
    migration: {
          deprecations: apiMethod
          get_assistance: apiMethod
          getAssistance: apiMethod
          upgrade: apiMethod
    }
    ml: {
          close_job: apiMethod
          closeJob: apiMethod
          delete_calendar: apiMethod
          deleteCalendar: apiMethod
          delete_calendar_event: apiMethod
          deleteCalendarEvent: apiMethod
          delete_calendar_job: apiMethod
          deleteCalendarJob: apiMethod
          delete_datafeed: apiMethod
          deleteDatafeed: apiMethod
          delete_expired_data: apiMethod
          deleteExpiredData: apiMethod
          delete_filter: apiMethod
          deleteFilter: apiMethod
          delete_forecast: apiMethod
          deleteForecast: apiMethod
          delete_job: apiMethod
          deleteJob: apiMethod
          delete_model_snapshot: apiMethod
          deleteModelSnapshot: apiMethod
          find_file_structure: apiMethod
          findFileStructure: apiMethod
          flush_job: apiMethod
          flushJob: apiMethod
          forecast: apiMethod
          get_buckets: apiMethod
          getBuckets: apiMethod
          get_calendar_events: apiMethod
          getCalendarEvents: apiMethod
          get_calendars: apiMethod
          getCalendars: apiMethod
          get_categories: apiMethod
          getCategories: apiMethod
          get_datafeed_stats: apiMethod
          getDatafeedStats: apiMethod
          get_datafeeds: apiMethod
          getDatafeeds: apiMethod
          get_filters: apiMethod
          getFilters: apiMethod
          get_influencers: apiMethod
          getInfluencers: apiMethod
          get_job_stats: apiMethod
          getJobStats: apiMethod
          get_jobs: apiMethod
          getJobs: apiMethod
          get_model_snapshots: apiMethod
          getModelSnapshots: apiMethod
          get_overall_buckets: apiMethod
          getOverallBuckets: apiMethod
          get_records: apiMethod
          getRecords: apiMethod
          info: apiMethod
          open_job: apiMethod
          openJob: apiMethod
          post_calendar_events: apiMethod
          postCalendarEvents: apiMethod
          post_data: apiMethod
          postData: apiMethod
          preview_datafeed: apiMethod
          previewDatafeed: apiMethod
          put_calendar: apiMethod
          putCalendar: apiMethod
          put_calendar_job: apiMethod
          putCalendarJob: apiMethod
          put_datafeed: apiMethod
          putDatafeed: apiMethod
          put_filter: apiMethod
          putFilter: apiMethod
          put_job: apiMethod
          putJob: apiMethod
          revert_model_snapshot: apiMethod
          revertModelSnapshot: apiMethod
          start_datafeed: apiMethod
          startDatafeed: apiMethod
          stop_datafeed: apiMethod
          stopDatafeed: apiMethod
          update_datafeed: apiMethod
          updateDatafeed: apiMethod
          update_filter: apiMethod
          updateFilter: apiMethod
          update_job: apiMethod
          updateJob: apiMethod
          update_model_snapshot: apiMethod
          updateModelSnapshot: apiMethod
          validate: apiMethod
          validate_detector: apiMethod
          validateDetector: apiMethod
    }
    monitoring: {
          bulk: apiMethod
    }
    rollup: {
          delete_job: apiMethod
          deleteJob: apiMethod
          get_jobs: apiMethod
          getJobs: apiMethod
          get_rollup_caps: apiMethod
          getRollupCaps: apiMethod
          get_rollup_index_caps: apiMethod
          getRollupIndexCaps: apiMethod
          put_job: apiMethod
          putJob: apiMethod
          rollup_search: apiMethod
          rollupSearch: apiMethod
          start_job: apiMethod
          startJob: apiMethod
          stop_job: apiMethod
          stopJob: apiMethod
    }
    security: {
          authenticate: apiMethod
          change_password: apiMethod
          changePassword: apiMethod
          clear_cached_realms: apiMethod
          clearCachedRealms: apiMethod
          clear_cached_roles: apiMethod
          clearCachedRoles: apiMethod
          delete_privileges: apiMethod
          deletePrivileges: apiMethod
          delete_role: apiMethod
          deleteRole: apiMethod
          delete_role_mapping: apiMethod
          deleteRoleMapping: apiMethod
          delete_user: apiMethod
          deleteUser: apiMethod
          disable_user: apiMethod
          disableUser: apiMethod
          enable_user: apiMethod
          enableUser: apiMethod
          get_privileges: apiMethod
          getPrivileges: apiMethod
          get_role: apiMethod
          getRole: apiMethod
          get_role_mapping: apiMethod
          getRoleMapping: apiMethod
          get_token: apiMethod
          getToken: apiMethod
          get_user: apiMethod
          getUser: apiMethod
          get_user_privileges: apiMethod
          getUserPrivileges: apiMethod
          has_privileges: apiMethod
          hasPrivileges: apiMethod
          invalidate_token: apiMethod
          invalidateToken: apiMethod
          put_privileges: apiMethod
          putPrivileges: apiMethod
          put_role: apiMethod
          putRole: apiMethod
          put_role_mapping: apiMethod
          putRoleMapping: apiMethod
          put_user: apiMethod
          putUser: apiMethod
    }
    sql: {
          clear_cursor: apiMethod
          clearCursor: apiMethod
          query: apiMethod
          translate: apiMethod
    }
    ssl: {
          certificates: apiMethod
    }
    usage: apiMethod
    watcher: {
          ack_watch: apiMethod
          ackWatch: apiMethod
          activate_watch: apiMethod
          activateWatch: apiMethod
          deactivate_watch: apiMethod
          deactivateWatch: apiMethod
          delete_watch: apiMethod
          deleteWatch: apiMethod
          execute_watch: apiMethod
          executeWatch: apiMethod
          get_watch: apiMethod
          getWatch: apiMethod
          put_watch: apiMethod
          putWatch: apiMethod
          restart: apiMethod
          start: apiMethod
          stats: apiMethod
          stop: apiMethod
    }
}
  constructor (opts: ESAPIOptions) {
    super()
    this.bulk = lazyLoad('./api/bulk.js', opts)
    this.cat = {
      aliases: lazyLoad('./api/cat.aliases.js', opts),
      allocation: lazyLoad('./api/cat.allocation.js', opts),
      count: lazyLoad('./api/cat.count.js', opts),
      fielddata: lazyLoad('./api/cat.fielddata.js', opts),
      health: lazyLoad('./api/cat.health.js', opts),
      help: lazyLoad('./api/cat.help.js', opts),
      indices: lazyLoad('./api/cat.indices.js', opts),
      master: lazyLoad('./api/cat.master.js', opts),
      nodeattrs: lazyLoad('./api/cat.nodeattrs.js', opts),
      nodes: lazyLoad('./api/cat.nodes.js', opts),
      pending_tasks: lazyLoad('./api/cat.pending_tasks.js', opts),
      pendingTasks: lazyLoad('./api/cat.pending_tasks.js', opts),
      plugins: lazyLoad('./api/cat.plugins.js', opts),
      recovery: lazyLoad('./api/cat.recovery.js', opts),
      repositories: lazyLoad('./api/cat.repositories.js', opts),
      segments: lazyLoad('./api/cat.segments.js', opts),
      shards: lazyLoad('./api/cat.shards.js', opts),
      snapshots: lazyLoad('./api/cat.snapshots.js', opts),
      tasks: lazyLoad('./api/cat.tasks.js', opts),
      templates: lazyLoad('./api/cat.templates.js', opts),
      thread_pool: lazyLoad('./api/cat.thread_pool.js', opts),
      threadPool: lazyLoad('./api/cat.thread_pool.js', opts)
    }
    this.ccr = {
      delete_auto_follow_pattern: lazyLoad('./api/ccr.delete_auto_follow_pattern.js', opts),
      deleteAutoFollowPattern: lazyLoad('./api/ccr.delete_auto_follow_pattern.js', opts),
      follow: lazyLoad('./api/ccr.follow.js', opts),
      follow_stats: lazyLoad('./api/ccr.follow_stats.js', opts),
      followStats: lazyLoad('./api/ccr.follow_stats.js', opts),
      get_auto_follow_pattern: lazyLoad('./api/ccr.get_auto_follow_pattern.js', opts),
      getAutoFollowPattern: lazyLoad('./api/ccr.get_auto_follow_pattern.js', opts),
      pause_follow: lazyLoad('./api/ccr.pause_follow.js', opts),
      pauseFollow: lazyLoad('./api/ccr.pause_follow.js', opts),
      put_auto_follow_pattern: lazyLoad('./api/ccr.put_auto_follow_pattern.js', opts),
      putAutoFollowPattern: lazyLoad('./api/ccr.put_auto_follow_pattern.js', opts),
      resume_follow: lazyLoad('./api/ccr.resume_follow.js', opts),
      resumeFollow: lazyLoad('./api/ccr.resume_follow.js', opts),
      stats: lazyLoad('./api/ccr.stats.js', opts),
      unfollow: lazyLoad('./api/ccr.unfollow.js', opts)
    }
    this.clear_scroll = lazyLoad('./api/clear_scroll.js', opts)
    this.clearScroll = lazyLoad('./api/clear_scroll.js', opts)
    this.cluster = {
      allocation_explain: lazyLoad('./api/cluster.allocation_explain.js', opts),
      allocationExplain: lazyLoad('./api/cluster.allocation_explain.js', opts),
      get_settings: lazyLoad('./api/cluster.get_settings.js', opts),
      getSettings: lazyLoad('./api/cluster.get_settings.js', opts),
      health: lazyLoad('./api/cluster.health.js', opts),
      pending_tasks: lazyLoad('./api/cluster.pending_tasks.js', opts),
      pendingTasks: lazyLoad('./api/cluster.pending_tasks.js', opts),
      put_settings: lazyLoad('./api/cluster.put_settings.js', opts),
      putSettings: lazyLoad('./api/cluster.put_settings.js', opts),
      remote_info: lazyLoad('./api/cluster.remote_info.js', opts),
      remoteInfo: lazyLoad('./api/cluster.remote_info.js', opts),
      reroute: lazyLoad('./api/cluster.reroute.js', opts),
      state: lazyLoad('./api/cluster.state.js', opts),
      stats: lazyLoad('./api/cluster.stats.js', opts)
    }
    this.count = lazyLoad('./api/count.js', opts)
    this.create = lazyLoad('./api/create.js', opts)
    this.delete = lazyLoad('./api/delete.js', opts)
    this.delete_by_query = lazyLoad('./api/delete_by_query.js', opts)
    this.deleteByQuery = lazyLoad('./api/delete_by_query.js', opts)
    this.delete_by_query_rethrottle = lazyLoad('./api/delete_by_query_rethrottle.js', opts)
    this.deleteByQueryRethrottle = lazyLoad('./api/delete_by_query_rethrottle.js', opts)
    this.delete_script = lazyLoad('./api/delete_script.js', opts)
    this.deleteScript = lazyLoad('./api/delete_script.js', opts)
    this.exists = lazyLoad('./api/exists.js', opts)
    this.exists_source = lazyLoad('./api/exists_source.js', opts)
    this.existsSource = lazyLoad('./api/exists_source.js', opts)
    this.explain = lazyLoad('./api/explain.js', opts)
    this.field_caps = lazyLoad('./api/field_caps.js', opts)
    this.fieldCaps = lazyLoad('./api/field_caps.js', opts)
    this.get = lazyLoad('./api/get.js', opts)
    this.get_script = lazyLoad('./api/get_script.js', opts)
    this.getScript = lazyLoad('./api/get_script.js', opts)
    this.get_source = lazyLoad('./api/get_source.js', opts)
    this.getSource = lazyLoad('./api/get_source.js', opts)
    this.index = lazyLoad('./api/index.js', opts)
    this.indices = {
      analyze: lazyLoad('./api/indices.analyze.js', opts),
      clear_cache: lazyLoad('./api/indices.clear_cache.js', opts),
      clearCache: lazyLoad('./api/indices.clear_cache.js', opts),
      close: lazyLoad('./api/indices.close.js', opts),
      create: lazyLoad('./api/indices.create.js', opts),
      delete: lazyLoad('./api/indices.delete.js', opts),
      delete_alias: lazyLoad('./api/indices.delete_alias.js', opts),
      deleteAlias: lazyLoad('./api/indices.delete_alias.js', opts),
      delete_template: lazyLoad('./api/indices.delete_template.js', opts),
      deleteTemplate: lazyLoad('./api/indices.delete_template.js', opts),
      exists: lazyLoad('./api/indices.exists.js', opts),
      exists_alias: lazyLoad('./api/indices.exists_alias.js', opts),
      existsAlias: lazyLoad('./api/indices.exists_alias.js', opts),
      exists_template: lazyLoad('./api/indices.exists_template.js', opts),
      existsTemplate: lazyLoad('./api/indices.exists_template.js', opts),
      exists_type: lazyLoad('./api/indices.exists_type.js', opts),
      existsType: lazyLoad('./api/indices.exists_type.js', opts),
      flush: lazyLoad('./api/indices.flush.js', opts),
      flush_synced: lazyLoad('./api/indices.flush_synced.js', opts),
      flushSynced: lazyLoad('./api/indices.flush_synced.js', opts),
      forcemerge: lazyLoad('./api/indices.forcemerge.js', opts),
      get: lazyLoad('./api/indices.get.js', opts),
      get_alias: lazyLoad('./api/indices.get_alias.js', opts),
      getAlias: lazyLoad('./api/indices.get_alias.js', opts),
      get_field_mapping: lazyLoad('./api/indices.get_field_mapping.js', opts),
      getFieldMapping: lazyLoad('./api/indices.get_field_mapping.js', opts),
      get_mapping: lazyLoad('./api/indices.get_mapping.js', opts),
      getMapping: lazyLoad('./api/indices.get_mapping.js', opts),
      get_settings: lazyLoad('./api/indices.get_settings.js', opts),
      getSettings: lazyLoad('./api/indices.get_settings.js', opts),
      get_template: lazyLoad('./api/indices.get_template.js', opts),
      getTemplate: lazyLoad('./api/indices.get_template.js', opts),
      get_upgrade: lazyLoad('./api/indices.get_upgrade.js', opts),
      getUpgrade: lazyLoad('./api/indices.get_upgrade.js', opts),
      open: lazyLoad('./api/indices.open.js', opts),
      put_alias: lazyLoad('./api/indices.put_alias.js', opts),
      putAlias: lazyLoad('./api/indices.put_alias.js', opts),
      put_mapping: lazyLoad('./api/indices.put_mapping.js', opts),
      putMapping: lazyLoad('./api/indices.put_mapping.js', opts),
      put_settings: lazyLoad('./api/indices.put_settings.js', opts),
      putSettings: lazyLoad('./api/indices.put_settings.js', opts),
      put_template: lazyLoad('./api/indices.put_template.js', opts),
      putTemplate: lazyLoad('./api/indices.put_template.js', opts),
      recovery: lazyLoad('./api/indices.recovery.js', opts),
      refresh: lazyLoad('./api/indices.refresh.js', opts),
      rollover: lazyLoad('./api/indices.rollover.js', opts),
      segments: lazyLoad('./api/indices.segments.js', opts),
      shard_stores: lazyLoad('./api/indices.shard_stores.js', opts),
      shardStores: lazyLoad('./api/indices.shard_stores.js', opts),
      shrink: lazyLoad('./api/indices.shrink.js', opts),
      split: lazyLoad('./api/indices.split.js', opts),
      stats: lazyLoad('./api/indices.stats.js', opts),
      update_aliases: lazyLoad('./api/indices.update_aliases.js', opts),
      updateAliases: lazyLoad('./api/indices.update_aliases.js', opts),
      upgrade: lazyLoad('./api/indices.upgrade.js', opts),
      validate_query: lazyLoad('./api/indices.validate_query.js', opts),
      validateQuery: lazyLoad('./api/indices.validate_query.js', opts)
    }
    this.info = lazyLoad('./api/info.js', opts)
    this.ingest = {
      delete_pipeline: lazyLoad('./api/ingest.delete_pipeline.js', opts),
      deletePipeline: lazyLoad('./api/ingest.delete_pipeline.js', opts),
      get_pipeline: lazyLoad('./api/ingest.get_pipeline.js', opts),
      getPipeline: lazyLoad('./api/ingest.get_pipeline.js', opts),
      processor_grok: lazyLoad('./api/ingest.processor_grok.js', opts),
      processorGrok: lazyLoad('./api/ingest.processor_grok.js', opts),
      put_pipeline: lazyLoad('./api/ingest.put_pipeline.js', opts),
      putPipeline: lazyLoad('./api/ingest.put_pipeline.js', opts),
      simulate: lazyLoad('./api/ingest.simulate.js', opts)
    }
    this.mget = lazyLoad('./api/mget.js', opts)
    this.msearch = lazyLoad('./api/msearch.js', opts)
    this.msearch_template = lazyLoad('./api/msearch_template.js', opts)
    this.msearchTemplate = lazyLoad('./api/msearch_template.js', opts)
    this.mtermvectors = lazyLoad('./api/mtermvectors.js', opts)
    this.nodes = {
      hot_threads: lazyLoad('./api/nodes.hot_threads.js', opts),
      hotThreads: lazyLoad('./api/nodes.hot_threads.js', opts),
      info: lazyLoad('./api/nodes.info.js', opts),
      reload_secure_settings: lazyLoad('./api/nodes.reload_secure_settings.js', opts),
      reloadSecureSettings: lazyLoad('./api/nodes.reload_secure_settings.js', opts),
      stats: lazyLoad('./api/nodes.stats.js', opts),
      usage: lazyLoad('./api/nodes.usage.js', opts)
    }
    this.ping = lazyLoad('./api/ping.js', opts)
    this.put_script = lazyLoad('./api/put_script.js', opts)
    this.putScript = lazyLoad('./api/put_script.js', opts)
    this.rank_eval = lazyLoad('./api/rank_eval.js', opts)
    this.rankEval = lazyLoad('./api/rank_eval.js', opts)
    this.reindex = lazyLoad('./api/reindex.js', opts)
    this.reindex_rethrottle = lazyLoad('./api/reindex_rethrottle.js', opts)
    this.reindexRethrottle = lazyLoad('./api/reindex_rethrottle.js', opts)
    this.render_search_template = lazyLoad('./api/render_search_template.js', opts)
    this.renderSearchTemplate = lazyLoad('./api/render_search_template.js', opts)
    this.scripts_painless_execute = lazyLoad('./api/scripts_painless_execute.js', opts)
    this.scriptsPainlessExecute = lazyLoad('./api/scripts_painless_execute.js', opts)
    this.scroll = lazyLoad('./api/scroll.js', opts)
    this.search = lazyLoad('./api/search.js', opts)
    this.search_shards = lazyLoad('./api/search_shards.js', opts)
    this.searchShards = lazyLoad('./api/search_shards.js', opts)
    this.search_template = lazyLoad('./api/search_template.js', opts)
    this.searchTemplate = lazyLoad('./api/search_template.js', opts)
    this.snapshot = {
      create: lazyLoad('./api/snapshot.create.js', opts),
      create_repository: lazyLoad('./api/snapshot.create_repository.js', opts),
      createRepository: lazyLoad('./api/snapshot.create_repository.js', opts),
      delete: lazyLoad('./api/snapshot.delete.js', opts),
      delete_repository: lazyLoad('./api/snapshot.delete_repository.js', opts),
      deleteRepository: lazyLoad('./api/snapshot.delete_repository.js', opts),
      get: lazyLoad('./api/snapshot.get.js', opts),
      get_repository: lazyLoad('./api/snapshot.get_repository.js', opts),
      getRepository: lazyLoad('./api/snapshot.get_repository.js', opts),
      restore: lazyLoad('./api/snapshot.restore.js', opts),
      status: lazyLoad('./api/snapshot.status.js', opts),
      verify_repository: lazyLoad('./api/snapshot.verify_repository.js', opts),
      verifyRepository: lazyLoad('./api/snapshot.verify_repository.js', opts)
    }
    this.tasks = {
      cancel: lazyLoad('./api/tasks.cancel.js', opts),
      get: lazyLoad('./api/tasks.get.js', opts),
      list: lazyLoad('./api/tasks.list.js', opts)
    }
    this.termvectors = lazyLoad('./api/termvectors.js', opts)
    this.update = lazyLoad('./api/update.js', opts)
    this.update_by_query = lazyLoad('./api/update_by_query.js', opts)
    this.updateByQuery = lazyLoad('./api/update_by_query.js', opts)
    this.update_by_query_rethrottle = lazyLoad('./api/update_by_query_rethrottle.js', opts)
    this.updateByQueryRethrottle = lazyLoad('./api/update_by_query_rethrottle.js', opts)
    this.xpack = {
      graph: {
        explore: lazyLoad('./api/xpack.graph.explore.js', opts)
      },
      info: lazyLoad('./api/xpack.info.js', opts),
      license: {
        delete: lazyLoad('./api/xpack.license.delete.js', opts),
        get: lazyLoad('./api/xpack.license.get.js', opts),
        get_basic_status: lazyLoad('./api/xpack.license.get_basic_status.js', opts),
        getBasicStatus: lazyLoad('./api/xpack.license.get_basic_status.js', opts),
        get_trial_status: lazyLoad('./api/xpack.license.get_trial_status.js', opts),
        getTrialStatus: lazyLoad('./api/xpack.license.get_trial_status.js', opts),
        post: lazyLoad('./api/xpack.license.post.js', opts),
        post_start_basic: lazyLoad('./api/xpack.license.post_start_basic.js', opts),
        postStartBasic: lazyLoad('./api/xpack.license.post_start_basic.js', opts),
        post_start_trial: lazyLoad('./api/xpack.license.post_start_trial.js', opts),
        postStartTrial: lazyLoad('./api/xpack.license.post_start_trial.js', opts)
      },
      migration: {
        deprecations: lazyLoad('./api/xpack.migration.deprecations.js', opts),
        get_assistance: lazyLoad('./api/xpack.migration.get_assistance.js', opts),
        getAssistance: lazyLoad('./api/xpack.migration.get_assistance.js', opts),
        upgrade: lazyLoad('./api/xpack.migration.upgrade.js', opts)
      },
      ml: {
        close_job: lazyLoad('./api/xpack.ml.close_job.js', opts),
        closeJob: lazyLoad('./api/xpack.ml.close_job.js', opts),
        delete_calendar: lazyLoad('./api/xpack.ml.delete_calendar.js', opts),
        deleteCalendar: lazyLoad('./api/xpack.ml.delete_calendar.js', opts),
        delete_calendar_event: lazyLoad('./api/xpack.ml.delete_calendar_event.js', opts),
        deleteCalendarEvent: lazyLoad('./api/xpack.ml.delete_calendar_event.js', opts),
        delete_calendar_job: lazyLoad('./api/xpack.ml.delete_calendar_job.js', opts),
        deleteCalendarJob: lazyLoad('./api/xpack.ml.delete_calendar_job.js', opts),
        delete_datafeed: lazyLoad('./api/xpack.ml.delete_datafeed.js', opts),
        deleteDatafeed: lazyLoad('./api/xpack.ml.delete_datafeed.js', opts),
        delete_expired_data: lazyLoad('./api/xpack.ml.delete_expired_data.js', opts),
        deleteExpiredData: lazyLoad('./api/xpack.ml.delete_expired_data.js', opts),
        delete_filter: lazyLoad('./api/xpack.ml.delete_filter.js', opts),
        deleteFilter: lazyLoad('./api/xpack.ml.delete_filter.js', opts),
        delete_forecast: lazyLoad('./api/xpack.ml.delete_forecast.js', opts),
        deleteForecast: lazyLoad('./api/xpack.ml.delete_forecast.js', opts),
        delete_job: lazyLoad('./api/xpack.ml.delete_job.js', opts),
        deleteJob: lazyLoad('./api/xpack.ml.delete_job.js', opts),
        delete_model_snapshot: lazyLoad('./api/xpack.ml.delete_model_snapshot.js', opts),
        deleteModelSnapshot: lazyLoad('./api/xpack.ml.delete_model_snapshot.js', opts),
        find_file_structure: lazyLoad('./api/xpack.ml.find_file_structure.js', opts),
        findFileStructure: lazyLoad('./api/xpack.ml.find_file_structure.js', opts),
        flush_job: lazyLoad('./api/xpack.ml.flush_job.js', opts),
        flushJob: lazyLoad('./api/xpack.ml.flush_job.js', opts),
        forecast: lazyLoad('./api/xpack.ml.forecast.js', opts),
        get_buckets: lazyLoad('./api/xpack.ml.get_buckets.js', opts),
        getBuckets: lazyLoad('./api/xpack.ml.get_buckets.js', opts),
        get_calendar_events: lazyLoad('./api/xpack.ml.get_calendar_events.js', opts),
        getCalendarEvents: lazyLoad('./api/xpack.ml.get_calendar_events.js', opts),
        get_calendars: lazyLoad('./api/xpack.ml.get_calendars.js', opts),
        getCalendars: lazyLoad('./api/xpack.ml.get_calendars.js', opts),
        get_categories: lazyLoad('./api/xpack.ml.get_categories.js', opts),
        getCategories: lazyLoad('./api/xpack.ml.get_categories.js', opts),
        get_datafeed_stats: lazyLoad('./api/xpack.ml.get_datafeed_stats.js', opts),
        getDatafeedStats: lazyLoad('./api/xpack.ml.get_datafeed_stats.js', opts),
        get_datafeeds: lazyLoad('./api/xpack.ml.get_datafeeds.js', opts),
        getDatafeeds: lazyLoad('./api/xpack.ml.get_datafeeds.js', opts),
        get_filters: lazyLoad('./api/xpack.ml.get_filters.js', opts),
        getFilters: lazyLoad('./api/xpack.ml.get_filters.js', opts),
        get_influencers: lazyLoad('./api/xpack.ml.get_influencers.js', opts),
        getInfluencers: lazyLoad('./api/xpack.ml.get_influencers.js', opts),
        get_job_stats: lazyLoad('./api/xpack.ml.get_job_stats.js', opts),
        getJobStats: lazyLoad('./api/xpack.ml.get_job_stats.js', opts),
        get_jobs: lazyLoad('./api/xpack.ml.get_jobs.js', opts),
        getJobs: lazyLoad('./api/xpack.ml.get_jobs.js', opts),
        get_model_snapshots: lazyLoad('./api/xpack.ml.get_model_snapshots.js', opts),
        getModelSnapshots: lazyLoad('./api/xpack.ml.get_model_snapshots.js', opts),
        get_overall_buckets: lazyLoad('./api/xpack.ml.get_overall_buckets.js', opts),
        getOverallBuckets: lazyLoad('./api/xpack.ml.get_overall_buckets.js', opts),
        get_records: lazyLoad('./api/xpack.ml.get_records.js', opts),
        getRecords: lazyLoad('./api/xpack.ml.get_records.js', opts),
        info: lazyLoad('./api/xpack.ml.info.js', opts),
        open_job: lazyLoad('./api/xpack.ml.open_job.js', opts),
        openJob: lazyLoad('./api/xpack.ml.open_job.js', opts),
        post_calendar_events: lazyLoad('./api/xpack.ml.post_calendar_events.js', opts),
        postCalendarEvents: lazyLoad('./api/xpack.ml.post_calendar_events.js', opts),
        post_data: lazyLoad('./api/xpack.ml.post_data.js', opts),
        postData: lazyLoad('./api/xpack.ml.post_data.js', opts),
        preview_datafeed: lazyLoad('./api/xpack.ml.preview_datafeed.js', opts),
        previewDatafeed: lazyLoad('./api/xpack.ml.preview_datafeed.js', opts),
        put_calendar: lazyLoad('./api/xpack.ml.put_calendar.js', opts),
        putCalendar: lazyLoad('./api/xpack.ml.put_calendar.js', opts),
        put_calendar_job: lazyLoad('./api/xpack.ml.put_calendar_job.js', opts),
        putCalendarJob: lazyLoad('./api/xpack.ml.put_calendar_job.js', opts),
        put_datafeed: lazyLoad('./api/xpack.ml.put_datafeed.js', opts),
        putDatafeed: lazyLoad('./api/xpack.ml.put_datafeed.js', opts),
        put_filter: lazyLoad('./api/xpack.ml.put_filter.js', opts),
        putFilter: lazyLoad('./api/xpack.ml.put_filter.js', opts),
        put_job: lazyLoad('./api/xpack.ml.put_job.js', opts),
        putJob: lazyLoad('./api/xpack.ml.put_job.js', opts),
        revert_model_snapshot: lazyLoad('./api/xpack.ml.revert_model_snapshot.js', opts),
        revertModelSnapshot: lazyLoad('./api/xpack.ml.revert_model_snapshot.js', opts),
        start_datafeed: lazyLoad('./api/xpack.ml.start_datafeed.js', opts),
        startDatafeed: lazyLoad('./api/xpack.ml.start_datafeed.js', opts),
        stop_datafeed: lazyLoad('./api/xpack.ml.stop_datafeed.js', opts),
        stopDatafeed: lazyLoad('./api/xpack.ml.stop_datafeed.js', opts),
        update_datafeed: lazyLoad('./api/xpack.ml.update_datafeed.js', opts),
        updateDatafeed: lazyLoad('./api/xpack.ml.update_datafeed.js', opts),
        update_filter: lazyLoad('./api/xpack.ml.update_filter.js', opts),
        updateFilter: lazyLoad('./api/xpack.ml.update_filter.js', opts),
        update_job: lazyLoad('./api/xpack.ml.update_job.js', opts),
        updateJob: lazyLoad('./api/xpack.ml.update_job.js', opts),
        update_model_snapshot: lazyLoad('./api/xpack.ml.update_model_snapshot.js', opts),
        updateModelSnapshot: lazyLoad('./api/xpack.ml.update_model_snapshot.js', opts),
        validate: lazyLoad('./api/xpack.ml.validate.js', opts),
        validate_detector: lazyLoad('./api/xpack.ml.validate_detector.js', opts),
        validateDetector: lazyLoad('./api/xpack.ml.validate_detector.js', opts)
      },
      monitoring: {
        bulk: lazyLoad('./api/xpack.monitoring.bulk.js', opts)
      },
      rollup: {
        delete_job: lazyLoad('./api/xpack.rollup.delete_job.js', opts),
        deleteJob: lazyLoad('./api/xpack.rollup.delete_job.js', opts),
        get_jobs: lazyLoad('./api/xpack.rollup.get_jobs.js', opts),
        getJobs: lazyLoad('./api/xpack.rollup.get_jobs.js', opts),
        get_rollup_caps: lazyLoad('./api/xpack.rollup.get_rollup_caps.js', opts),
        getRollupCaps: lazyLoad('./api/xpack.rollup.get_rollup_caps.js', opts),
        get_rollup_index_caps: lazyLoad('./api/xpack.rollup.get_rollup_index_caps.js', opts),
        getRollupIndexCaps: lazyLoad('./api/xpack.rollup.get_rollup_index_caps.js', opts),
        put_job: lazyLoad('./api/xpack.rollup.put_job.js', opts),
        putJob: lazyLoad('./api/xpack.rollup.put_job.js', opts),
        rollup_search: lazyLoad('./api/xpack.rollup.rollup_search.js', opts),
        rollupSearch: lazyLoad('./api/xpack.rollup.rollup_search.js', opts),
        start_job: lazyLoad('./api/xpack.rollup.start_job.js', opts),
        startJob: lazyLoad('./api/xpack.rollup.start_job.js', opts),
        stop_job: lazyLoad('./api/xpack.rollup.stop_job.js', opts),
        stopJob: lazyLoad('./api/xpack.rollup.stop_job.js', opts)
      },
      security: {
        authenticate: lazyLoad('./api/xpack.security.authenticate.js', opts),
        change_password: lazyLoad('./api/xpack.security.change_password.js', opts),
        changePassword: lazyLoad('./api/xpack.security.change_password.js', opts),
        clear_cached_realms: lazyLoad('./api/xpack.security.clear_cached_realms.js', opts),
        clearCachedRealms: lazyLoad('./api/xpack.security.clear_cached_realms.js', opts),
        clear_cached_roles: lazyLoad('./api/xpack.security.clear_cached_roles.js', opts),
        clearCachedRoles: lazyLoad('./api/xpack.security.clear_cached_roles.js', opts),
        delete_privileges: lazyLoad('./api/xpack.security.delete_privileges.js', opts),
        deletePrivileges: lazyLoad('./api/xpack.security.delete_privileges.js', opts),
        delete_role: lazyLoad('./api/xpack.security.delete_role.js', opts),
        deleteRole: lazyLoad('./api/xpack.security.delete_role.js', opts),
        delete_role_mapping: lazyLoad('./api/xpack.security.delete_role_mapping.js', opts),
        deleteRoleMapping: lazyLoad('./api/xpack.security.delete_role_mapping.js', opts),
        delete_user: lazyLoad('./api/xpack.security.delete_user.js', opts),
        deleteUser: lazyLoad('./api/xpack.security.delete_user.js', opts),
        disable_user: lazyLoad('./api/xpack.security.disable_user.js', opts),
        disableUser: lazyLoad('./api/xpack.security.disable_user.js', opts),
        enable_user: lazyLoad('./api/xpack.security.enable_user.js', opts),
        enableUser: lazyLoad('./api/xpack.security.enable_user.js', opts),
        get_privileges: lazyLoad('./api/xpack.security.get_privileges.js', opts),
        getPrivileges: lazyLoad('./api/xpack.security.get_privileges.js', opts),
        get_role: lazyLoad('./api/xpack.security.get_role.js', opts),
        getRole: lazyLoad('./api/xpack.security.get_role.js', opts),
        get_role_mapping: lazyLoad('./api/xpack.security.get_role_mapping.js', opts),
        getRoleMapping: lazyLoad('./api/xpack.security.get_role_mapping.js', opts),
        get_token: lazyLoad('./api/xpack.security.get_token.js', opts),
        getToken: lazyLoad('./api/xpack.security.get_token.js', opts),
        get_user: lazyLoad('./api/xpack.security.get_user.js', opts),
        getUser: lazyLoad('./api/xpack.security.get_user.js', opts),
        get_user_privileges: lazyLoad('./api/xpack.security.get_user_privileges.js', opts),
        getUserPrivileges: lazyLoad('./api/xpack.security.get_user_privileges.js', opts),
        has_privileges: lazyLoad('./api/xpack.security.has_privileges.js', opts),
        hasPrivileges: lazyLoad('./api/xpack.security.has_privileges.js', opts),
        invalidate_token: lazyLoad('./api/xpack.security.invalidate_token.js', opts),
        invalidateToken: lazyLoad('./api/xpack.security.invalidate_token.js', opts),
        put_privileges: lazyLoad('./api/xpack.security.put_privileges.js', opts),
        putPrivileges: lazyLoad('./api/xpack.security.put_privileges.js', opts),
        put_role: lazyLoad('./api/xpack.security.put_role.js', opts),
        putRole: lazyLoad('./api/xpack.security.put_role.js', opts),
        put_role_mapping: lazyLoad('./api/xpack.security.put_role_mapping.js', opts),
        putRoleMapping: lazyLoad('./api/xpack.security.put_role_mapping.js', opts),
        put_user: lazyLoad('./api/xpack.security.put_user.js', opts),
        putUser: lazyLoad('./api/xpack.security.put_user.js', opts)
      },
      sql: {
        clear_cursor: lazyLoad('./api/xpack.sql.clear_cursor.js', opts),
        clearCursor: lazyLoad('./api/xpack.sql.clear_cursor.js', opts),
        query: lazyLoad('./api/xpack.sql.query.js', opts),
        translate: lazyLoad('./api/xpack.sql.translate.js', opts)
      },
      ssl: {
        certificates: lazyLoad('./api/xpack.ssl.certificates.js', opts)
      },
      usage: lazyLoad('./api/xpack.usage.js', opts),
      watcher: {
        ack_watch: lazyLoad('./api/xpack.watcher.ack_watch.js', opts),
        ackWatch: lazyLoad('./api/xpack.watcher.ack_watch.js', opts),
        activate_watch: lazyLoad('./api/xpack.watcher.activate_watch.js', opts),
        activateWatch: lazyLoad('./api/xpack.watcher.activate_watch.js', opts),
        deactivate_watch: lazyLoad('./api/xpack.watcher.deactivate_watch.js', opts),
        deactivateWatch: lazyLoad('./api/xpack.watcher.deactivate_watch.js', opts),
        delete_watch: lazyLoad('./api/xpack.watcher.delete_watch.js', opts),
        deleteWatch: lazyLoad('./api/xpack.watcher.delete_watch.js', opts),
        execute_watch: lazyLoad('./api/xpack.watcher.execute_watch.js', opts),
        executeWatch: lazyLoad('./api/xpack.watcher.execute_watch.js', opts),
        get_watch: lazyLoad('./api/xpack.watcher.get_watch.js', opts),
        getWatch: lazyLoad('./api/xpack.watcher.get_watch.js', opts),
        put_watch: lazyLoad('./api/xpack.watcher.put_watch.js', opts),
        putWatch: lazyLoad('./api/xpack.watcher.put_watch.js', opts),
        restart: lazyLoad('./api/xpack.watcher.restart.js', opts),
        start: lazyLoad('./api/xpack.watcher.start.js', opts),
        stats: lazyLoad('./api/xpack.watcher.stats.js', opts),
        stop: lazyLoad('./api/xpack.watcher.stop.js', opts)
      }
    }
  }
}

// It's unlikely that a user needs all of our APIs,
// and since require is a sync operation that takes time
// (given the amount of APIs we have), let's lazy load them,
// so a given API file will be required only
// if the user actually needs that API.
// The following implementation takes advantage
// of js closures to have a simple cache with the least overhead.
function lazyLoad (file: string, opts: any): any {
  var fn: any = null
  return function _lazyLoad (params: any, callback: any): any {
    if (fn === null) {
      opts.makeRequest = opts.getMakeRequest()
      fn = require(file)(opts)
    }
    return fn(params, callback)
  }
}
