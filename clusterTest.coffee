class ClusterTest

  constructor: (@name) ->
    @series = 0
    @terget = 3
    @mem = null
    @count = 0
  exec:->
    console.time(@name)
    console.log "#{@name} pid: #{process.pid} start"
    while(@series isnt @terget)
      num = Math.floor( Math.random() * 1000 )
      if num is @mem
        @series++
      else
        @series = 0
      @mem = num
      @count++
    console.log "#{process.pid} done: #{@count} count"
    console.timeEnd(@name)

test1 = new ClusterTest('test1')
test1.exec()
# test2 = new ClusterTest('test2')
# test2.exec()
# test3 = new ClusterTest('test3')
# test3.exec()
# test4 = new ClusterTest('test4')
# test4.exec()
