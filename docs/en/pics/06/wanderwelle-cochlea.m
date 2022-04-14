x = linspace(-100, 40, 100);
y = linspace(-10, 10, 100);

[xx, yy] = meshgrid(x, y);

zz = sinc(xx./4) .*exp(-((xx)./40).^2) .* exp(-((yy)./2).^2);
# zz = sinc(xx);
# zz = exp(-((yy)./2).^2);

#clf;
#hold on;
#t = -10:0.1:10;
#f = sinc(t);
#plot(t, f);
#g_1 = exp(-((t)./4).^2);
#plot(t, g_1);
#hold off;

surf(xx, yy, zz);
# xlim([-80, 25]);
ylim([-5 , 5]);
view([25 55]);