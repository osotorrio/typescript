using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace ConsoleApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Console.WriteLine($"Launched from {Environment.CurrentDirectory}");
            // Console.WriteLine($"Physical location {AppDomain.CurrentDomain.BaseDirectory}");
            // Console.WriteLine($"AppContext.BaseDir {AppContext.BaseDirectory}");
            // Console.WriteLine($"Runtime Call {Path.GetDirectoryName(Process.GetCurrentProcess().MainModule.FileName)}");

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
